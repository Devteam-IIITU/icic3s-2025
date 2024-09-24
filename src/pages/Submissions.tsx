const SubmissionRules = () => {
  return (
    <div className="flex flex-col bg-white p-6 md:p-10">
      <div className="mybox w-full">
        <h2 className="text-3xl font-bold mb-4">Submission Rules</h2>
        <ul className="list-disc list-inside text-black text-lg leading-7 mb-8">
          <li>
            All the papers submitted to the conference should be written in
            English with a maximum page length of 4 – 6 printed pages (10pt
            font) in double column IEEE Conference.
          </li>
          <li>
            Authors should submit their original unpublished work in PDF/MS Word
            format to ICIC3S 2025.
          </li>
          <li>
            Papers already submitted to other conferences/journals are not
            allowed.
          </li>
          <li>
            Submission should strictly follow the recommended IEEE conference
            template, which can be found{" "}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1CREH4VyTsgbft4MJiftUvcTgE62gsTWC/edit?usp=drive_link"
              className="text-blue-600 hover:underline"
            >
              Word (A4)
            </a>
            /
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1tF7pn5w-tBKJ0lgzpAvQKXjQs8tPfSlX/edit?usp=drive_link"
              className="text-blue-600 hover:underline"
            >
              Word (Letter)
            </a>
            /
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1pBftgKt08H9PFGVOiK2RMMPSteLS1wBj/view?usp=drive_link"
              className="text-blue-600 hover:underline"
            >
              Latex
            </a>
            )
          </li>
          <li>
            The decision regarding the acceptance of a paper is at the
            discretion of the Technical Program Committee.
          </li>
          <li>
            Please note that the authors will need to register their email with
            Microsoft CMT for submitting papers.
          </li>
          <li>
            The similarity score of the paper should not be more than 20%.
          </li>
        </ul>

        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cmt3.research.microsoft.com/ICIC3S2024"
            className="bg-gray-800 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700 transition"
          >
            Paper Submission
          </a>
        </div>

        <h2 className="text-3xl font-bold mb-4">Publication Ethics</h2>
        <ul className="list-disc list-inside text-black text-lg leading-7 mb-4">
          <li>
            Every paper submitted to ICIC3S-2025 will be checked for plagiarism
            using anti-plagiarism software before being sent for a
            pre-conference review. Authors should observe high standards with
            respect to publication ethics. Falsification or fabrication of data,
            plagiarism, including duplicate publication of the author’s own work
            without proper citation, and misappropriation of the work are all
            unacceptable.
          </li>
        </ul>

        <p className="text-black text-lg">
          For more details, please refer to the IEEE Web Page on Plagiarism
          through the following link:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html"
            className="text-blue-600 hover:underline"
          >
            Plagiarism Guidelines
          </a>
        </p>
      </div>
    </div>
  );
};

export default SubmissionRules;
