// components/UserInfoCard.tsx
"use client";

import Image from "next/image";
import { useGetMeQuery } from "@repo/redux/feature/user";

export default function UserInfoCard() {
    const { data, isLoading } = useGetMeQuery();
    const user = data?.user;

    if (isLoading) {
        return (
            <div className="border rounded-xl p-6 shadow-sm bg-card max-w-md">
                <p className="text-sm text-muted-foreground">Loading profile...</p>
            </div>
        );
    }

    if (!data?.authenticated || !user) {
        return (
            <div className="border rounded-xl p-6 shadow-sm bg-card max-w-md">
                <p className="text-sm text-muted-foreground">Please log in to view your profile.</p>
            </div>
        );
    }


    return (
        // <div className="border-2 border-red-500 rounded-xl p-6 shadow-sm bg-card max-w-md">
        //     <div className="flex items-center gap-4 mb-5">
        //         <div className="w-20 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
        //             {user.profileImage ? (
        //                 <Image
        //                     width={80}
        //                     height={80}
        //                     src={user.profileImage}
        //                     alt="Profile image"
        //                     className="object-cover rounded-full"
        //                 />
        //             ) : (
        //                 <span>
        //                     {(user.name?.charAt(0) ?? "U").toUpperCase()}
        //                 </span>
        //             )}
        //         </div>

        //         <div>
        //             <h2 className="text-xl font-bold">{user.name ?? "Unknown User"}</h2>
        //             <p className="text-muted-foreground text-sm">{user.email ?? "-"}</p>
        //         </div>
        //     </div>

        //     <div className="space-y-3 text-sm">
        //         {user.uuid && (
        //             <div>
        //                 <span className="text-muted-foreground">UUID: </span>
        //                 <span className="font-mono text-xs break-all">{user.uuid}</span>
        //             </div>
        //         )}
        //     </div>
        // </div>
        <div className="max-w-md overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card to-muted/20 p-8 shadow-lg transition-all hover:shadow-xl">
    <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-6 mb-6">
        {/* Avatar Container */}
        <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-blue-500 opacity-25 blur transition duration-300 group-hover:opacity-50"></div>
            <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-secondary ring-4 ring-background">
                {user.profileImage ? (
                    <Image
                        width={80}
                        height={80}
                        src={user.profileImage}
                        alt="Profile image"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                ) : (
                    <span className="text-3xl font-bold text-primary">
                        {(user.name?.charAt(0) ?? "U").toUpperCase()}
                    </span>
                )}
            </div>
        </div>

        {/* User Info */}
        <div className="flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                {user.name ?? "Unknown User"}
            </h2>
            <p className="font-medium text-muted-foreground">
                {user.email ?? "No email provided"}
            </p>
        </div>
    </div>

    {/* Metadata Section */}
    <div className="rounded-xl bg-muted/50 p-4 backdrop-blur-sm">
        {user.uuid && (
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                    Account Identifier
                </span>
                <span className="font-mono text-xs font-medium break-all text-foreground/80">
                    {user.uuid}
                </span>
            </div>
        )}
    </div>
</div>
    );
}
