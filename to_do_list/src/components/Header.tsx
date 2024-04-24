import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full bg-gray-800 flex justify-between">
    <div className="text-white text-xl p-2 font-bold font-serif">Todo App</div>
    <div className="text-white text-xl p-2">
        <Link href="https://github.com/Mansi-bhandari1501" target="_black" rel="noopener noreferrer"
        >
        <GitHubIcon />
        </Link>
      </div>
      </div>
  )
}

export default Header
