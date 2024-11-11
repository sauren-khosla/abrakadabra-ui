"use client"

import React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface User {
  id: string
  src?: string
  alt?: string
  fallback?: string
}

interface GroupAvatarProps {
  users: User[]
  max?: number
}

export function GroupAvatar({ users, max = 4 }: GroupAvatarProps) {
  const displayUsers = users.slice(0, max)
  const extraCount = users.length - max

  return (
    <div className={cn("flex items-center")}>
      {displayUsers.map((user, index) => (
        <div
          key={user.id}
          className={cn(
            "relative rounded-full border-2 border-gray-50",
            index !== 0 && "-ml-3"
          )}
          style={{
            zIndex: users.length - index
          }}
        >
          <Avatar>
            {user.src ? (
              <AvatarImage src={user.src} alt={user.alt} />
            ) : (
              <AvatarFallback>{user.fallback || "?"}</AvatarFallback>
            )}
          </Avatar>
        </div>
      ))}
      {extraCount > 0 && (
        <div
        className={cn(
          "flex items-center justify-center bg-black text-white text-xs font-medium rounded-full",
          "w-6 h-6 -ml-1"
        )}
          aria-label={`${extraCount} more users`}
        >
          +{extraCount}
        </div>
      )}
    </div>
  )
}

export default function GroupAvatarDemo() {
  const users = [
    {
      id: "user1",
      src: "https://github.com/shadcn.png",
      alt: "@shadcn",
    },
    {
      id: "user2",
      fallback: "SK",
    },
    {
      id: "user3",
      src: "https://avatars.githubusercontent.com/u/52003826?s=400&u=02f4a51d837e8425327f9c37ac69b16409c3d89d&v=4",
      alt: "@janedoe",
    },
    {
      id: "user4",
      fallback: "MW",
    },
    {
      id: "user5",
      fallback: "CH",
      alt: "@alexsmith",
    },
  ]

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      {/* Medium Size, Max 4 */}
      <GroupAvatar users={users} max={4} />

      {/* Small Size, Max 3 */}
      <GroupAvatar users={users} max={3} />

      {/* Large Size, Max 5 */}
      <GroupAvatar users={users} max={5} />
    </div>
  )
}