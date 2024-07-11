import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import { Button } from "@/shadcn-components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn-components/ui/popover";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Accordion type="single" collapsible className="w-[500px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </>
  );
}
