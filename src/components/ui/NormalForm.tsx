import React from "react";
import {useForm} from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("mx-auto p-5 border border-green-500 rounded-md", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn("grid justify-items-center grid-cols-1 gap-5", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full">
          <label className="block">Name</label>
          <input className="" type="text" placeholder="enter your name" {...register("name")} />
        </div>
        <div className="w-full">
          <label className="block">Name</label>
          <input className="w-full max-w-md" type="text" placeholder="enter your name" {...register("name")} />
        </div>
        <div className="w-full">
          <label className="block">Name</label>
          <input className="w-full max-w-md" type="text" placeholder="enter your name" {...register("name")} />
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
