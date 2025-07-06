import TestCase from './TestCase.js'

export async function addTestCase(testCase){
  try{
    const res = await TestCase.create(testCase);
    return res;
  }catch(err){
    throw err;
  }
}

export async function getTestCase(id) {
  try{
    const res = await TestCase.find({
      _id: id
    })
    return res;
  }catch(err){
    console.log(err);
  }
}

export async function editTestCase(id, updatedData){
  try {
    const updated = await TestCase.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    return updated;
  }catch(err){
    console.log(err);
  }
}

export async function getAllTestCases(id) {
  try{
    const res = await TestCase.find({
      questionId: id
    })
    console.log(res);
    return res;
  }catch(err){
    console.log(err);
  }
}

export async function deleteTestCase(id){
  try{
    const res = await TestCase.findByIdAndDelete(id);
    return res;
  }catch(err){
    console.log(err);
  }
}

export async function deleteAllTestCases(id){
  try{
    const res = await TestCase.deleteMany({
      questionId: id
    });
    return res;
  }catch(err){
    console.log(err);
  }
}