import Link from "next/link"
import { Button } from "../ui/button"
import WhatsApp from "../vectors/logos/whatsapp"

export const WhatsAppButton = () => {
    return (
        <Button variant={"default"} size={"icon"} asChild className="size-fit fixed bottom-5 right-5 p-3 bg-[#00E676] hover:bg-[#00E676] animate-pulse z-[99999]">
            <Link href={"https://wa.me/16621395149"} target="_blank">
                <WhatsApp />
            </Link>
        </Button>
    )
}