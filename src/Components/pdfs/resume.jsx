import jsPDF from "jspdf";
import "jspdf-autotable";

export default function HarvardResume() {
  let generateResume = () => {
    let doc = new jsPDF("portrait");
    doc.setFontSize(10);

    // Add content to the PDF
    doc.text("Education", 20, 20);
    doc.text("Harvard University", 20, 30);
    doc.text("Bachelor of Arts", 20, 40);

    doc.output("dataurlnewwindow");
  };

  return <button onClick={generateResume}>Download Resume</button>;
}
