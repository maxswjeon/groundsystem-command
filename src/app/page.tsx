export default function Home() {
  return (
    <div className="w-full p-12">
      <h1 className="text-3xl font-bold p-3">
        Ground Station Command System :: SPACE Y
      </h1>
      <div className="mt-3 p-3 hidden">
        <h2 className="text-xl font-semibold">Login</h2>
        <div className="grid grid-cols-[100px_1fr] gap-3">
          <p className="p-2">ID</p>
          <input
            type="text"
            placeholder="ID"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <p className="p-2">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="button"
          className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
        >
          Apply
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="mt-3 p-3 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold">Account</h2>
          <p className="">
            Logged in as <b>Sangwan Jeon</b>
          </p>
          <button
            type="button"
            className="w-full p-2 bg-red-500 text-white rounded-md mt-3"
          >
            Logout
          </button>
        </div>
        <div className="mt-3 p-3 border border-gray-300 rounded-lg flex flex-col">
          <h2 className="text-xl font-semibold">Control</h2>
          <p className="">
            Control in Charge: <b>Sangwan Jeon</b>
          </p>
          <div className="flex-1" />
          <button
            type="button"
            className="w-full p-2 bg-red-500 text-white rounded-md mt-3"
          >
            Control Handover
          </button>
        </div>
      </div>
      <div className="mt-3 p-3 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-semibold">Commands</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 mt-3 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Telemetery</h3>
            <button
              type="button"
              className="w-full p-2 bg-blue-600 text-white rounded-md mt-3"
            >
              Telemetery ON
            </button>
            <button
              type="button"
              className="w-full p-2 bg-red-500 text-white rounded-md mt-3"
            >
              Telemetery OFF
            </button>
          </div>
          <div className="p-3 mt-3 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Time</h3>
            <input
              type="datetime-local"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Set Time
            </button>
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Set from GPS
            </button>
          </div>
          <div className="p-3 mt-3 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Simulation</h3>
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Simulation Enable
            </button>
            <button
              type="button"
              className="w-full p-2 bg-red-500 text-white rounded-md mt-3"
            >
              Simulation Disable
            </button>
            <button
              type="button"
              className="w-full p-2 bg-green-600 text-white rounded-md mt-3"
            >
              Simulation Start
            </button>
          </div>
          <div className="p-3 mt-3 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Simulation Data</h3>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-md mt-3"
            />
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Simulation Step
            </button>
          </div>
          <div className="p-3 mt-3 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Calibrate</h3>
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Reset Altitude
            </button>
          </div>
          <div className="p-3 mt-3 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold">Activation</h3>
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Beacon
            </button>
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Heatshield
            </button>
            <button
              type="button"
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-3"
            >
              Parachute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
