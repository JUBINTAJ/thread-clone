import { useRouter } from 'next/navigation';

export default function Modal({ isOpen, onClose }) {
    if (!isOpen) return null; 


    const router = useRouter()


    const logout = (() => {
        localStorage.clear()
        router.push('/login')
    
      })
    return (
      <div className="fixed inset-0 z-50 flex items-end justify-start ">
      <div className="ml-6 mb-5">
        <div className="bg-[#2C2C2C] text-white rounded-2xl p-6 w-64">
          <button onClick={onClose} className="justify-center items-start">&times;</button>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] mr-7 rounded-2xl">Appearance</li>
            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl">Insights</li>
            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl">Settings</li>
            <div className="w-[230px] h-px bg-[#3b3b3b] mt-2 mr-12"></div>
            <li className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl">Report a problem</li>
            <li
              className="cursor-pointer hover:bg-gray-700 px-2 py-1 h-10 w-[225px] rounded-2xl text-red-500"
              onClick={logout}
            >
              Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    
    );
  }
  