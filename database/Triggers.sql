CREATE OR REPLACE FUNCTION UpdateItemQuantity()
RETURNS TRIGGER AS $$
DECLARE
  new_quantity float;
  old_quantity float;
BEGIN
  old_quantity := (SELECT units_in_stock FROM Item WHERE Item.item_id = NEW.item_id);
  IF old_quantity - NEW.quantity < 0 THEN
  	RAISE EXCEPTION 'Invalid number of items. Number of items in this order exeeds number of available items'
	  USING ERRCODE = '23505';
  ELSE
  	new_quantity := NEW.quantity;
  END IF;

  UPDATE Item
   SET units_in_stock = units_in_stock - new_quantity
   WHERE item_id = NEW.item_id;
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_item_quantity
BEFORE INSERT OR UPDATE ON OrderProduct
FOR EACH ROW
EXECUTE FUNCTION UpdateItemQuantity();

CREATE OR REPLACE FUNCTION UpdateItemStatus()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.units_in_stock > 0 THEN
    NEW.status := 'In Stock';
  ELSE
    NEW.status := 'Out Of Stock';
  END IF;

  RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_item_status
BEFORE INSERT OR UPDATE ON Item
FOR EACH ROW
EXECUTE FUNCTION UpdateItemStatus();

CREATE OR REPLACE FUNCTION handleUniqueUserViolation()
RETURNS TRIGGER AS $$
BEGIN
    RETURN NEW;
EXCEPTION
    WHEN unique_violation THEN
        RAISE EXCEPTION 'A user with this login, email or phone number already exists: login=% email=% phone_number=%', NEW.login, NEW.email, NEW.phone_number
			USING ERRCODE = '23505';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER unique_user_violation_trigger
BEFORE INSERT OR UPDATE ON UserProfile
FOR EACH ROW
EXECUTE FUNCTION handleUniqueUserViolation();

CREATE OR REPLACE FUNCTION checkUsersClientId()
RETURNS TRIGGER AS $$
BEGIN
	IF NEW.role_id <> 2 AND NEW.client_id IS NOT NULL THEN
		NEW.client_id := NULL;
	ELSIF NEW.role_id = 2 AND NEW.client_id IS NULL THEN
		NEW.client_id := 1;
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_users_clientid_trigger
BEFORE INSERT OR UPDATE ON UserProfile
FOR EACH ROW
EXECUTE FUNCTION checkUsersClientId();

UPDATE Item
	   SET units_in_stock = 0
	   WHERE item_id = 4;
