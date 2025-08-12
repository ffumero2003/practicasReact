function TextAreaButton(){
  return(
    <>
      <textarea name="" id="" className='border border-black w-full min-h-24 placeholder:ml-2' placeholder='Message'></textarea>
      <button className='p-4 text-black bg-yellow-300 w-full text-sm cursor-pointer hover:bg-yellow-500 transition-all duration-500'>SEND MESSAGE</button>
    </>
  )

}
export default TextAreaButton;