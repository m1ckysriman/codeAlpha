
import React, {useState } from 'react';
import { Document, Page,Text, PDFDownloadLink } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import '../style.css'

function App() {
  const [fileContent, setfileContent] = useState('');

  const loaddetails = (event) => {                   // get the details of the code 
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const details = reader.result;
      setfileContent(details);
    };

    reader.readAsText(file);
  };

  const changetopdf = () => {                   // to pdf change 
    const MyDocument = () => (
      <Document>
      <Page>
      <Text>{fileContent}</Text>
      </Page>
      </Document>
    );

    const pdfBlob = <PDFDownloadLink document={<MyDocument />} fileName="todo.pdf">
                      {({ blob }) => (
                        <button className="bluebutton" onClick={() => saveAs(blob, 'todo.pdf')}>
                          Download pdf
                        </button>
                      )}
                    </PDFDownloadLink>;

    return pdfBlob;
  };

  return (
    <div className="container">
      <h1>choose your TXT file</h1>
      <input type="file" onChange={loaddetails} />
      {fileContent && changetopdf()}
    </div>
  );
}

export default App;






