// 'use client';

// import {
//     IconCircleCheck,
//     IconChevronsDown,
//     IconLogout,
//     IconLogin
// } from '@tabler/icons-react';

// import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/ui/avatar';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger
// } from '@repo/ui/components/ui/dropdown-menu';
// import { useGetMeQuery, DEFAULT_NAV_USER } from '@repo/redux/feature/user';

// const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? 'http://localhost:3333';

// export function UserCom() {
//     const { data, isLoading } = useGetMeQuery();
//     const isAuthenticated = Boolean(data?.authenticated && data.user);

//     const user = isAuthenticated
//         ? {
//             name: data?.user?.name ?? DEFAULT_NAV_USER.name,
//             email: data?.user?.email ?? DEFAULT_NAV_USER.email,
//             avatar: data?.user?.profileImage ?? DEFAULT_NAV_USER.avatar
//         }
//         : DEFAULT_NAV_USER;

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <button
//                     type='button'
//                     className='flex items-center gap-3 rounded-md px-2 py-1 hover:bg-gray-800'
//                 >
//                     <Avatar className='h-8 w-8 rounded-lg'>
//                         <AvatarImage src={user.avatar} alt={user.name} />
//                         <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
//                     </Avatar>
//                     <div className='grid text-left text-sm leading-tight'>
//                         <span className='truncate font-semibold'>
//                             {isLoading ? 'Loading...' : user.name}
//                         </span>
//                         <span className='truncate text-xs'>{user.email}</span>
//                     </div>
//                     <IconChevronsDown className='ml-1 size-4' />
//                 </button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent
//                 className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-amber-900'
//                 align='end'
//                 sideOffset={4}
//             >
//                 <DropdownMenuLabel className='p-0 font-normal'>
//                     <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
//                         <Avatar className='h-8 w-8 rounded-lg'>
//                             <AvatarImage src={user.avatar} alt={user.name} />
//                             <AvatarFallback className='rounded-lg'>DF</AvatarFallback>
//                         </Avatar>
//                         <div className='grid flex-1 text-left text-sm leading-tight'>
//                             <span className='truncate font-semibold'>{user.name}</span>
//                             <span className='truncate text-xs'>{user.email}</span>
//                         </div>
//                     </div>
//                 </DropdownMenuLabel>
//                 <DropdownMenuSeparator />

//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                     {isAuthenticated && (
//                         <DropdownMenuItem asChild>
//                             <a href={`${rootDomain}/profile`} className='flex items-center'>
//                                 <IconCircleCheck className='mr-2 h-4 w-4' />
//                                 Profile
//                             </a>
//                         </DropdownMenuItem>
//                     )}
//                 </DropdownMenuGroup>
//                 <DropdownMenuSeparator />
//                 {isAuthenticated ? (
//                     <DropdownMenuItem asChild>
//                         <a href='/logout' className='flex items-center'>
//                             <IconLogout className='mr-2 h-4 w-4' />
//                             Log out
//                         </a>
//                     </DropdownMenuItem>
//                 ) : (
//                     <DropdownMenuItem asChild>
//                         <a href='/oauth2/authorization/itp-frontbff' className='flex items-center'>
//                             <IconLogin className='mr-2 h-4 w-4' />
//                             Log in
//                         </a>
//                     </DropdownMenuItem>
//                 )}
//             </DropdownMenuContent>
//         </DropdownMenu>
//     );
// }

'use client';

import {
    IconCircleCheck,
    IconChevronsDown,
    IconLogout,
    IconLogin,
    IconUserCircle
} from '@tabler/icons-react';

import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@repo/ui/components/ui/dropdown-menu';
import { useGetMeQuery, DEFAULT_NAV_USER } from '@repo/redux/feature/user';

const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? 'http://localhost:3333';

export function UserCom() {
    const { data, isLoading } = useGetMeQuery();
    const isAuthenticated = Boolean(data?.authenticated && data.user);

    const user = isAuthenticated
        ? {
            name: data?.user?.name ?? DEFAULT_NAV_USER.name,
            email: data?.user?.email ?? DEFAULT_NAV_USER.email,
            avatar: data?.user?.profileImage ?? DEFAULT_NAV_USER.avatar
        }
        : DEFAULT_NAV_USER;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type='button'
                    className='group flex items-center gap-3 rounded-xl p-1.5 transition-all hover:bg-white/5 active:scale-95'
                >
                    <div className="relative">
                        <Avatar className='h-9 w-9 border border-white/10 transition-transform group-hover:scale-105'>
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className='bg-primary/20 text-primary'>
                                {user.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        {isAuthenticated && (
                            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500" />
                        )}
                    </div>
                    
                    <div className='hidden flex-col text-left text-sm leading-tight md:flex'>
                        <span className='truncate font-medium text-foreground'>
                            {isLoading ? '...' : user.name} <br/>
                            {isLoading ? '...':  user.email}
                        </span>
                    </div>
                    
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className='w-64 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90 p-1 backdrop-blur-xl shadow-2xl'
                align='end'
                sideOffset={8}
            >
                <DropdownMenuLabel className='px-3 py-3 font-normal'>
                    <div className='flex items-center gap-3'>
                        <Avatar className='h-10 w-10 border border-white/10'>
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className='bg-primary/10'>
                                {user.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col space-y-0.5 text-left'>
                            <span className='truncate text-sm font-semibold text-white'>{user.name}</span>
                            <span className='truncate text-[12px] text-zinc-400'>{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator className="bg-white/5" />

                <DropdownMenuGroup className="p-1">
                    {isAuthenticated && (
                        <DropdownMenuItem asChild className="rounded-lg py-2 focus:bg-white/10">
                            <a href={`${rootDomain}/profile`} className='flex cursor-pointer items-center'>
                                <IconUserCircle className='mr-2.5 h-4.5 w-4.5 text-white' />
                                <span className="text-sm text-white font-medium">My Profile</span>
                            </a>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-white/5" />
                
                <div className="p-1">
                    {isAuthenticated ? (
                        <DropdownMenuItem asChild className="rounded-lg py-2 text-red-400 focus:bg-red-500/10 focus:text-red-400">
                            <a href='/logout' className='flex cursor-pointer items-center'>
                                <IconLogout className='mr-2.5 h-4.5 w-4.5' />
                                <span className="text-sm font-medium">Log out</span>
                            </a>
                        </DropdownMenuItem>
                    ) : (
                        <DropdownMenuItem asChild className="rounded-lg py-2 text-emerald-400 focus:bg-emerald-500/10 focus:text-emerald-400">
                            <a href='/oauth2/authorization/itp-frontbff' className='flex cursor-pointer items-center'>
                                <IconLogin className='mr-2.5 h-4.5 w-4.5' />
                                <span className="text-sm font-medium">Log in</span>
                            </a>
                        </DropdownMenuItem>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
