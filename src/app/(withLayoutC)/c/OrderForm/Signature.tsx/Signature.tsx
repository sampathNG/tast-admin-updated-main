"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';

const Signature: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'type' | 'draw' | 'upload'>('type');
  const [typedSignature, setTypedSignature] = useState('');
  const [uploadedSignature, setUploadedSignature] = useState<string | ArrayBuffer | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleTypedSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedSignature(e.target.value);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        canvas.onmousemove = (ev) => draw(ev);
      }
    }
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.onmousemove = null;
    }
  };

  const draw = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <div className="signature-section">
      <div className="tab-buttons flex justify-center">
        <button className='border-2 border-blue-500 px-6 py-2 hover:text-white hover:bg-blue-500' onClick={() => setActiveTab('type')}>Type</button>
        <button className='border-2 border-blue-500 px-6 py-2 hover:text-white hover:bg-blue-500' onClick={() => setActiveTab('draw')}>Draw</button>
        <button className='border-2 border-blue-500 px-5 py-2 hover:text-white hover:bg-blue-500' onClick={() => setActiveTab('upload')}>Upload</button>
      </div>

      <div className="signature-input">
        {activeTab === 'type' && (
          <input
            type="text"
            value={typedSignature}
            onChange={handleTypedSignatureChange}
            placeholder="Type your signature"
          />
        )}

        {activeTab === 'draw' && (
          <div>
            <canvas
              ref={canvasRef}
              width={400}
              height={200}
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              className="border"
            ></canvas>
            <button className='flex justify-center text-center items-center' onClick={clearCanvas}>Clear</button>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className='bg-blue-300'>
            <input className='flex justify-center text-center' type="file" accept="image/*" onChange={handleFileUpload} />
            {uploadedSignature && (
              <div className="relative w-full h-25">
                <Image
                  src={uploadedSignature as string}
                  alt="Uploaded signature"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signature;
