export default function Menu() {
  return (
    <div className="rounded-md bg-gray-200 p-4 lg:w-1/2">
      <h2> Todays Menu</h2>
      <div className="flex">
        <div>Breakfast</div>
        <div className="flex flex-col">
          <div>Idli</div>
          <div>Chutney</div>
        </div>
      </div>
    </div>
  );
}
