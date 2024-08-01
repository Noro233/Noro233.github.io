




function ResumeCards({ title, years }) {


  return (
    <>
      <div className="flex gap-2 group" >

        <div className="w-12 h-[5px] bgOpacity mt-14  relative">
          <span className="absolute rounded-full 
                             flex justify-center items-center bg-designColor bg-opacity-50 ">
          </span>
          <span className="absolute w-3 h-3  rounded-full bg-black inline-flex 
                           group-hover:bg-designColor duration-300 -top-1 -left-2 ">
          </span>
        </div>

        <div className=" mt-5 bg-black bg-opacity-20 hover:bg-opacity-30 bg-opacity-20
                         hover:bg-opacity-30 duration-300 rounded-lg px-5 
                         flex flex-col justify center gap-3  shadow-shadowOne ">
          <h3>{title}</h3>
          <h5> {years}</h5>
        </div>

      </div>


    </>
  );
}

export default ResumeCards;
