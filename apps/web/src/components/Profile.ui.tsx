import { useSession } from "@/lib/auth/client.ts";

const Profile = () => {
  const { data: auth } = useSession();
  const image = auth?.user?.image;

  if (typeof image === "string") {
    return (
      <img
        src={image}
        alt="Profile"
        className="w-10 h-10 rounded-full"
        referrerPolicy="no-referrer"
      />
    );
  }
};

export { Profile };
