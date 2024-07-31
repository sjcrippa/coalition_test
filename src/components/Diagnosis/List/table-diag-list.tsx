'use client';

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { usePatientsContext } from "@/context/PatientsContext";

export default function TableDiagList() {
  const { selectedPatient } = usePatientsContext();

  return (
    <section className="h-[350px] px-5 pb-[10px] overflow-y-hidden">
      <ScrollArea className="h-full">
        <Table>
          <TableHeader className="bg-light ">
            <TableRow>
              <TableHead className="w-[200px] sm font-bold text-dark">Problem/Diagnosis</TableHead>
              <TableHead className="w-[325px] sm font-bold text-dark">Description</TableHead>
              <TableHead className="sm font-bold text-dark">Status</TableHead>
            </TableRow>
          </TableHeader>
          {
            selectedPatient?.diagnostic_list.map((item, index) => (
              <TableBody className="text-sm" key={index}>
                <TableRow>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              </TableBody>
            ))
          }
        </Table>
      </ScrollArea>
    </section>
  );
};
