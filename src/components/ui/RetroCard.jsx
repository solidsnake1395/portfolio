import React from 'react';

const RetroCard = ({
  title = 'Window',
  description,
  imageUrl,
  buttons = [
    { label: 'Action 1', onClick: () => {} },
    { label: 'Action 2', onClick: () => {} },
  ],
}) => {
  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="relative w-[300px] h-[250px] -translate-x-[6px] -translate-y-[6px] transform bg-[#ff66a3] border-[3px] border-black [box-shadow:12px_12px_0_#000] overflow-hidden transition-all duration-300 hover:translate-x-0 hover:translate-y-0"
    >
      <div className="w-full h-8 bg-white px-3 py-[5px] text-[14px] font-black text-black border-b-[3px] border-black">
        {title}
      </div>

      <div className="px-3 py-2 text-sm font-semibold h-[calc(100%-56px)] overflow-hidden relative">
        {/* Texto / descripción */}
        <div className="pr-[90px]">
          {description || 'This is a neobrutalist-style window with a button and space for any content you want!'}
        </div>

        {/* Imagen opcional en la esquina superior derecha del contenido */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="retro"
            className="absolute top-[12px] right-[12px] w-[84px] h-[56px] object-cover border-[2px] border-black"
          />
        )}

        {/* Botones en la esquina inferior derecha */}
        <div className="absolute bottom-[12px] right-[12px] flex gap-2">
          {(buttons || []).slice(0, 2).map((btn, i) => (
            <button
              key={i}
              type="button"
              onClick={btn.onClick}
              className="py-[5px] px-[10px] border-[3px] border-black [box-shadow:3px_3px_0_#000] font-extrabold bg-[#4ade80] transition-all duration-200 transform hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:[box-shadow:1.5px_1.5px_0_#000] hover:bg-[#1ac2ff] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0_0_0_#000] cursor-pointer text-xs"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetroCard;
