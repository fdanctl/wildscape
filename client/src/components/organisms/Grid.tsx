export function Grid() {
  // 11 x 10 (hxw)
  return (
    <div className="grid grid-cols-10 gap-2 min-h-full [&>div]:bg-grayish text-center">
      <div className="rounded-xl col-span-2">
        <p>Total of animal</p>
        <p>0000</p>
      </div>
      <div className="rounded-xl col-span-2">
        <p>Diferent Species</p>
        <p>0000</p>
      </div>
      <div className="rounded-xl col-span-2">
        <p>hdoewihf</p>
        <p>0000</p>
      </div>
      <div className="rounded-xl col-span-4 row-span-11">
        <p>Your Daily Tasks</p>
      </div>
      <div className="rounded-xl col-span-6 row-span-8">
        <p>Species</p>
      </div>
      <div className="rounded-xl col-span-3 row-span-2 flex items-center justify-center font-bold text-primaryGreen hover:bg-secundaryGreen">
        <p>Wildlife</p>
      </div>
      <div className="rounded-xl col-span-3 row-span-2 hover:bg-secundaryGreen">
        <p>Resources</p>
      </div>
    </div>
  );
}
