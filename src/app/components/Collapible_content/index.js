import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CollapsibleContent from '../collape_component'
import { useSelector } from 'react-redux';

const Collapible_content = props => {
          const obj = useSelector((state)=>state.Section[props.getid]);
          const [data , setData ] = useState()
        
          
    useEffect(()=>{
              // alert(obj.number_of_content)
              const customdata = []
              for(var x=1; x<=obj.number_of_content; x++){
                  let y = x;
                  customdata.push(
                    {
                      heading: obj[`heading${x}`],
                      Description: obj[`description${x}`]
                    }
                  
                  )
              }
              setData(customdata)
          },[obj.number_of_content ,
            obj.heading1,
            obj.description1,
            obj.heading2,
            obj.description2,
            obj.heading3,
            obj.description3,
            obj.heading4,
            obj.description4,
            obj.heading5,
            obj.description5,
            obj.heading6,
            obj.description6,
          ])
  return (
    <div>
      {
        data && (
          <CollapsibleContent data={data} />
        )
      }
    </div>
  )
}

Collapible_content.propTypes = {}

export default Collapible_content