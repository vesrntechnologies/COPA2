// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which is open source software?",
   
    answer: "Open Office",
    options: [
      "Open Office",
      "Windows 10",
      "Mac OS",
      "Microsoft Office 365"
    ]
  },
    {
    numb: 2,
    question: "Which command remove files in Linux?",
    answer: "rm",
    options: [
      "delete",
      "rm",
      "dm", 
      "erase"
    ]
  },
    {
    numb: 3,
    question: "What is the first option of the KDE desktop in Linux?",
    
    answer: "Application",
    options: [
      "Preference",
      "Application",
      "System",
      "System Setting"
    ]
  },
    {
    numb: 4,
    question: "What is the full form of OSS?",
    answer: "Open Source Software",
    options: [
      "Open System Service",
      "Open Source Software",
      "Open System Software",
      "Open Synchronized Software"
    ]
  },
    {
    numb: 5,
    question: "Which software coding is freely available on the internet and open for users for further use?",
    answer: "Open source software",
    options: [
      "Unlicensed software",
      "Open source software",
      "Free Software",
      "Community Software"
    ]
  },
  {
    numb: 6,
    question: "What is the full form of FSF?",
    answer: "Free Software Foundation",
    options: [
      "File Server First",
      "Free Software File",
      "Free Software Foundation",
      "First Software First"
    ]
  },
  {
    numb: 7,
    question: "Which command stores the active document permanently?",
    answer: "Save",
    options: [
      "Save",
      "Send",
      "Prepare",
      "Save as"
    ]
  },
  {
    numb: 8,
    question: "Which bar contains the current position of the cursor in MS Word?",

    answer: "Status bar",
    options: [
      "Layout",
      "Title bar",
      "Status bar",
      "Horizontal ruler"
    ]
  },
  {
    numb: 9,
    question: "Which is a text styling feature of MS Word?",

    answer: "Word Art",
    options: [
      "Word Fill",
      "Word Art",
      "Word Colour",
      "Word Font"
    ]
  },
 {
    numb: 10,
    question: "Which document view resembles the appearance of a web browser? ",

    answer: "Web layout view",
    options: [
      "draft view",
      "outline view",
      "Web layout view",
      "full screen reading"
    ]
  },
     {
    numb: 11,
    question: "What is the purpose of quick access toolbar?",

    answer: "To hold familiar and repeated function",
    options: [
      "To hold advance function",
      "To hld special function",
      "To hold basic function",
      "To hold familiar and repeated function"
    ]
  },
     {
    numb: 12,
    question: "What is the purpose of gutter margin?",

    answer: "Added to binding side of page when printing",
    options: [
      "Added to left margin when printing",
      "Added to right marghin when printing",
      "Added to binding side of page when printing",
      "Added to the outside of page when printing"
    ]
  },
     {
    numb: 13,
    question: "Which option is used for tab setting?",

    answer: "Horizontal ruler",
    options: [
      "Horizontal ruler",
      "Status bar",
      "Vertical ruler",
      "Vertical scroll bar"
    ]
  },
     {
    numb: 14,
    question: "What is the purpose of cover page?",

    answer: "Allows to fill title, author and date",
    options: [
      "Allows to fill title, author and date",
      "Fills list of people intent to mail",
      "To view the mailed list",
      "Contains details of the documents"
    ]
  },
     {
    numb: 15,
    question: "Which term refers to the process of combining two or more cells to make one?",

    answer: "Merging",
    options: [
      "Combining",
      "Joining",
      "Merging",
      "Creating"
    ]
  },
 {
    numb: 16,
    question: "What has the ability to combine name and addresses within standard document?",

    answer: "mail merge",
    options: [
      "Document formatting",
      "mail merge",
      "Database management",
      "Form letters"
    ]
  },
 {
    numb: 17,
    question: "Which shortcut key center aligns the selected text in MS Word?",

    answer: "Ctrl + E",
    options: [
      "Ctrl + F",
      "Ctrl + A",
      "Ctrl + E",
      "Ctrl + C"
    ]
  },
     {
    numb: 18,
    question: "What is the purpose of Shift+Ctrl+N in Open Office?",

    answer: "To open templates and documents dialog",
    options: [
      "To create new document",
      "to open a document",
      "To open templates and documents dialog",
      "To exit application"
    ]
  },
    
     {
    numb: 19,
    question: "How can you inset a audio file in your document?",

    answer: "Insert > object menu option",
    options: [
      "Insert > sound menu",
      "Insert > file menu option",
      "Insert > object menu option",
      "Insert > blank menu"
    ]
  },
     {
    numb: 20,
    question: "How are individuals in a table referred to as?",

    answer: "cells",
    options: [
      "cells",
      "boxes",
      "rows",
      "columns"
    ]
  },
      {
    numb: 21,
    question: "Which MS word tab has acess to mail merge options?",

    answer: "Mailings tab",
    options: [
      "Insert Tab",
      "Reference Tab",
      "Home Tab",
      "Mailings tab"
    ]
  },
      {
    numb: 22,
    question: "Which is a default document type for a mail merge?",

    answer: "Letters",
    options: [
      "Data",
      "Lables and list",
      "Letters",
      "Set"
    ]
  },
       {
    numb: 23,
    question: "Which shortcut key prints a document?",

    answer: "Ctrl + P",
    options: [
      "Ctrl + C",
      "Ctrl + R",
      "Ctrl + P",
      "Ctrl + E"
    ]
  },
          {
    numb: 24,
    question: "Which key copies the selected items in open source office?",

    answer: "Ctrl + C",
    options: [
      "Ctrl + C",
      "Ctrl + R",
      "Ctrl + P",
      "Ctrl + E"
    ]
  },
           {
    numb: 25,
    question: "Which list is used to create multiple copies of a document in a mail merge?",

    answer: "Data Source",
    options: [
      "Form label",
      "Main Document",
      "Data Source",
      "Database"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
