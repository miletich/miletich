'use client';

import { PDFViewer } from '@react-pdf/renderer';
import CurriculumVitae from './cv/CV';

export default function WebPage(): JSX.Element {
  return (
    <PDFViewer className="w-screen h-screen">
      <CurriculumVitae />
    </PDFViewer>
  );
}
