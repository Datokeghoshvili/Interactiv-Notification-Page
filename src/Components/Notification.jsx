import React from 'react'
import { useState } from 'react'
import data from "../data.json"

function Notification()
 {
    const [userdata, Setuserdata]=useState(data)
    const MarkAsRead =()=>{
        const clone = [...userdata].map(item=>{
            item.read = true;
            return  item
            
        })
        Setuserdata(clone)


    }
    const ClickedSingle =(index)=>{
        const clone =[...userdata]
        clone[index].read =true;
        Setuserdata(clone)


        
    }
    
    return (
        <div className='bg-white w-[730px] pl-[32px] pt-[33px] pr-[30px] pb-[18px] rounded-[15px]'>
            <header className='flex justify-between item-center'>

            <h1 className='text-[24px] font-extrabold	'>Notification <span className='font-[16px] text-white bg-blue px-[11px] py-[4px] rounded-[6px]' >
            {userdata.filter(item => !item.read).length}
            </span>
            </h1>
            <p onClick={MarkAsRead} className=''>Mark all as read</p>
            </header>
            <div className='mt-[30px] flex  flex-col gap-[20px]'>
                {userdata.map((item, index)=>{
                    
                    return(
                        <div onClick={() => ClickedSingle(index)} key ={index} className={`flex gap-[19px] items-center p-[5px] ${item.read ? "bg-transparent":"bg-[#F7FAFD] "}  `}>
                            
                            <img src={`./Images/avatar-${item.author.replace(" ", "-").toLocaleLowerCase()}.svg`} alt="eeo"
                            className="w-[45px]" />
                            <div>
                            <p>
                            <span>{item.author}</span> 
                            {" "}
                            <span>{item.type}</span>
                            {" "}

                           {item.content.includes(".svg") ?( <img src={item.content}/> )
                           :(
                            <span
                             className={item.type == "has joined your group"
                              ||
                              item.type == "left the group"
                              
                               ? "text-blue font-extrabold "
                                : ""}  
                                >
                                    {item.content}
                            </span>)}

                          
                            
                            {" "}

                            </p>
                            <p>
                                {item.time}
                            </p>
                            </div>
                           
                            </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Notification
