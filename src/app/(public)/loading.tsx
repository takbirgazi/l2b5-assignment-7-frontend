import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white/80">
            <div className="flex flex-col items-center gap-4 p-8">
                <Loader2 className="h-12 w-12 animate-spin text-[#00854f]" />
                <span className="text-xl font-semibold text-gray-800">Loading, please wait...</span>
            </div>
        </div>
    );
}
