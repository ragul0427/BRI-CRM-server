const Form=require("../modals/employeeadddetails")

const createForm = async (req, res) => {
  try {
    console.log(req.body,"lll")
    const result=await Form.create({...req.body})
    return res.status(200).send({data:result._id})
  } catch (e) {
    return res.status(200).send({data:"Something went wrong while creating the form"})
  }
};


const getForm = async (req, res) => {
  try {
    const result=await Form.find({})
    return res.status(200).send({data:result})
  } catch (e) {
    return res.status(200).send({data:"Something went wrong while fetching the form"})
  }
};

const updateForm=async(req,res)=>{
    const { id } = req.params;
    console.log(req.body,"lkkl")
    try {
      const result = await Form.findByIdAndUpdate(id, { ...req.body });
      return res.status(200).send({ data: result });
    } catch (e) {
      return res.status(500).send("Something went wrong while updating form");
    }
}


module.exports={createForm,getForm,updateForm}