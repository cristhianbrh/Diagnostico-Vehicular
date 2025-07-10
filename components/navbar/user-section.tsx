import { Button } from "@/components/ui/button";
import { User } from "@/generated/prisma";
import { IAccessToken } from "@/utils/cookies";
import { LogOut } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export function UserSection({ currentUser }: { currentUser: IAccessToken }) {
  if (!currentUser) return null;

  return (
    <div className="flex items-center gap-2 ml-4 border-l pl-4">
      <span className="text-sm text-muted-foreground">
        {currentUser.name} ({currentUser.role})
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
}
