import React, { lazy, Suspense, useState } from "react";


const Form = lazy(()=>import('../../app/form'))
const DragAndDrop = () => {


  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
          <Form />
      </Suspense>
    </div>
  );
};

export default DragAndDrop;
