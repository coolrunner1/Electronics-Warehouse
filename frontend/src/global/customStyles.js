export const customStyles = {
    control: (provided) => ({
        ...provided,
        display: 'flex',
        flexWrap: 'nowrap',
        color: "black",
        overflowY: scroll,
        maxWidth: '150px',
        fontSize: '18px',
        fontWeight: 500,
    }),
    menu: (provided) => ({
        ...provided,
        color: "black",
        overflowY: scroll,
        fontSize: '18px',
        fontWeight: 500,
    }),
};