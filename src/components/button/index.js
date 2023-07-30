export default function Button (props) {
  return (<button
    className={`px-9 py-4 min-w-[200px] bg-blue-400 hover:bg-blue-600 text-white font-bold ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>)
}