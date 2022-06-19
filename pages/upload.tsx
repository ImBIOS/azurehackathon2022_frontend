import axios from "axios";
import { NextPage } from "next";
import React from "react";
import { read, utils } from "xlsx";
import { BACKEND_URL } from "../constant";
import AuthLayout from "../layout/AuthLayout";

const UploadPage: NextPage = () => {
  const postData = async (data: any) => {
    const response = await axios.post(`${BACKEND_URL}/api/students`, {
      data,
    });
    console.log(response);
  };

  const handleFileUpload = (fileList: FileList) => {
    const file = fileList[0];
    bulkParseXLSX(file);
  };

  const bulkParseXLSX = (file: Blob) => {
    // files is an array of file
    // if I just want the first file
    let reader = new FileReader();

    reader.onload = function (e) {
      let data = new Uint8Array(e!.target!.result as ArrayBuffer);
      let workbook = read(data, { type: "array" });
      // find the name of your sheet in the workbook first
      let worksheet = workbook.Sheets["Sheet1"];

      // convert to json format
      const jsonData = utils.sheet_to_json(worksheet);
      postData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <AuthLayout>
      <div className="relative h-screen p-2 rounded-lg border-dashed border-2 border-gray-400 bg-transparent flex justify-center items-center">
        <div className="absolute">
          <div className="flex flex-col items-center ">
            <i className="fa fa-cloud-upload fa-3x text-gray-200" />
            <span className="block text-gray-400 font-normal">
              Attach your files here
            </span>
            <span className="block text-gray-400 font-normal">or</span>
            <span className="block text-blue-400 font-normal cursor-pointer">
              Browse files
            </span>
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          className="h-full w-full opacity-0 hover:cursor-pointer"
          name=""
          onChange={(e) => {
            if (e.target.files !== null) {
              handleFileUpload(e.target.files);
            }
          }}
          onDrop={(e) => {
            e.stopPropagation();
            e.preventDefault();

            console.log(e.dataTransfer.files);
          }}
          onDragOver={(e) => {
            e.stopPropagation();
            e.preventDefault();

            e.dataTransfer.dropEffect = "copy";
          }}
        />
      </div>
    </AuthLayout>
  );
};

export default UploadPage;
