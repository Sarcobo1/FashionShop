import React from "react";


const Dars1 = () => {
    const [formData, setFormData] = useState({
      fish: "",
      sniff: "",
      tel: "",
    })
    const [tableData, setTableData] = useState([]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleAdd = () => {
        if (formData.fish && formData.sniff && formData.tel) {
          setTableData([...tableData, formData]);
          setFormData({ fish: "", sniff: "", tel: "" });
        }
      };
    
      const handleDelete = (index) => {
        const updatedData = tableData.filter((_, i) => i !== index);
        setTableData(updatedData);
      };
    
      const handleEdit = (index) => {
        const dataToEdit = tableData[index];
        setFormData(dataToEdit);
        handleDelete(index);
      };
    
}

export default Dars1