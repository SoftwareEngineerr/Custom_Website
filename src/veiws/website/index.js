import React, { lazy, Suspense, useState } from "react";


const Form = lazy(()=>import('../../app/form'))
const DragAndDrop = () => {


  return (
    <Suspense fallback={<>Loading...</>}>
        <Form />
    </Suspense>
  );
};

export default DragAndDrop;
