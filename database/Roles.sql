/*
    Do not use this in the database!
    This is made only for report for university.
*/

CREATE ROLE admin;
CREATE ROLE client;
CREATE ROLE employee;

GRANT SELECT, INSERT, UPDATE ON Category TO admin;
GRANT SELECT, INSERT, UPDATE ON Client TO admin;
GRANT SELECT, INSERT, UPDATE ON Role TO admin;
GRANT SELECT, INSERT, UPDATE ON Supplier TO admin;
GRANT SELECT, INSERT, UPDATE ON ClientOrder TO admin;
GRANT SELECT, INSERT, UPDATE ON Item TO admin;
GRANT ALL ON UserProfile TO admin;
GRANT SELECT, INSERT, UPDATE ON OrderProduct TO admin;
GRANT SELECT, INSERT, UPDATE ON SupplierItem TO admin;
GRANT SELECT, INSERT, UPDATE ON OrderReturn TO admin;

GRANT SELECT ON Category TO client;
GRANT SELECT, UPDATE ON Client TO client;
GRANT SELECT, INSERT, UPDATE ON ClientOrder TO client;
GRANT SELECT ON Item TO client;
GRANT SELECT, UPDATE ON UserProfile TO client;
GRANT SELECT, INSERT, UPDATE ON OrderProduct TO client;
GRANT SELECT, INSERT, UPDATE ON OrderReturn TO client;

GRANT SELECT ON Category TO employee;
GRANT SELECT, INSERT, UPDATE ON Client TO employee;
GRANT SELECT ON Role TO employee;
GRANT SELECT, INSERT, UPDATE ON Supplier TO employee;
GRANT SELECT, INSERT, UPDATE ON ClientOrder TO employee;
GRANT SELECT, INSERT, UPDATE ON Item TO employee;
GRANT SELECT ON UserProfile TO employee;
GRANT SELECT, INSERT, UPDATE ON OrderProduct TO employee;
GRANT SELECT, INSERT, UPDATE ON SupplierItem TO employee;
GRANT SELECT, INSERT, UPDATE ON OrderReturn TO employee;
