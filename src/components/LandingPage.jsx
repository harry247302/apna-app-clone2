import profile from '../assets/9Q1hdG7uJjhDT9SeHjN2Qg5s.avif';
import { PlayCircle, Building2 } from 'lucide-react';

const LandingPage = ()=>{
    return(
         <div className="min-h-screen bg-gradient-to-b from-[#0a1929] via-[#0d2137] to-[#0f3d3d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-8">
            <div className="flex items-end gap-8">
              <div className="relative">
                <img
                  src={profile}
                  alt="Professional"
                  className="w-72 h-96 object-cover rounded-t-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
              </div>

              <div className="pb-8">
                <h1 className="text-5xl font-bold text-white leading-tight">
                  Hire your<br />
                  dream team with apna
                </h1>
              </div>
            </div>

            <div className="space-y-4 pl-4">
              <p className="text-gray-300 text-lg">
                Streamline your recruitment with AI-driven precision.<br />
                Single solution from fresher to experienced hiring.
              </p>

              <button className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
                <PlayCircle className="w-5 h-5" />
                <span className="font-medium">Watch video</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div>
                <div className="text-3xl font-bold text-white mb-1">6 Crore +</div>
                <div className="text-gray-400 text-sm">Qualified candidates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">7 Lakh +</div>
                <div className="text-gray-400 text-sm">Employers use apna</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">900 +</div>
                <div className="text-gray-400 text-sm">Available cities</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className=" backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl border border-[#2d4f6b]/50">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Let's get started</h2>
                  <p className="text-gray-300">Hire top talent faster with apna</p>
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-white font-medium mb-2">
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Enter 10 digit mobile number"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    maxLength={10}
                  />
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Continue
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-500"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#1e3a52] text-gray-400">OR</span>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-2 text-white hover:text-gray-200 transition-colors w-full">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium underline">Click here for Enterprise login</span>
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By clicking continue, you agree to the apna{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Terms of service</a>
                  {' '}&{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Privacy policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LandingPage;