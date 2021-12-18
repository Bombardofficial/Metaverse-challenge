import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-md absolute top-5 right-5 font-mono">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-sky-200 font-bold"
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
