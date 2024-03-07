import AuthWrapper from "../components/AuthPage/AuthWrapper";
import LeftHalf from "../components/AuthPage/LeftHalf";
import RightHalf from "../components/AuthPage/RightHalf";

export default function AuthPage() {
  return (
    <AuthWrapper>
      <div className="bg-[#F4F7F7]">
        <div className="flex flex-col sm:flex-row justify-center items-center h-screen mx-auto px-4 sm:px-24">
          <LeftHalf />
          <RightHalf />
        </div>
      </div>
    </AuthWrapper>
  );
}
