const course = {
  "id": 1, // Number, Required
  "title": "Title", // String, Required
  "description": "<p>This is a description of a course</p>", // String, Required, Raw HTML
  "excerpt": "<p>This excerpt is different than the description</p>", // String, Required, Raw HTML
  "image": { // Optional
    "id": 1,
    "src": "https://placekitten.com/800/533", // String, Required
    "width": 300, // Number, Required
    "height": 200, // Number, Required
    "title": "The featured image title", // String
    "alt": "The imgage alt text", // String
    "caption": "A caption that might have <em>emphasis</em>", // String, Raw HTML
    "srcset": [ // Array
      {
        "width": 800, // Number, Required
        "height": 533, // Number, Required
        "src": "https://placekitten.com/800/533" // String, Required
      },
      {
        "width": 500, // Number, Required
        "height": 333, // Number, Required
        "src": "https://placekitten.com/500/333" // String, Required
      }
    ]
  },
  "categories": [
    {
      "id": 1, // Number, Required
      "title": "Title", // String, Required
      "description": "<p>This is a description of a category</p>", // String, Raw HTML
    }
  ],
  "lessons": [ // Array, Required
    {
      "id": 1, // Number, Required
      "title": "Title", // String, Required
      "description": "<p>This is a description of a lesson</p>", // String, Required, Raw HTML
      "excerpt": "<p>This excerpt is different than the description</p>", // String, Required, Raw HTML
      "image": { // Optional
        "id": 1,
        "src": "https://placekitten.com/800/533", // String, Required
        "width": 300, // Number, Required
        "height": 200, // Number, Required
        "title": "The featured image title", // String
        "alt": "The imgage alt text", // String
        "caption": "A caption that might have <em>emphasis</em>", // String, Raw HTML
        "srcset": [ // Array
          {
            "width": 800, // Number, Required
            "height": 533, // Number, Required
            "src": "https://placekitten.com/800/533" // String, Required
          },
          {
            "width": 500, // Number, Required
            "height": 333, // Number, Required
            "src": "https://placekitten.com/500/333", // String, Required
          }
        ]
      },
      "media": {
        "id": 1, // Number, Required
        "title": "The audio/video title", // String, Required
        "video": { // Required
          "id": 1, // Number, Required
          "video_id": "gDgME_uIWtA", // String, Required
          "src": "https://courses.america.gov/video.mp3" // String
        },
        "audio": { // Optional
          "id": 1, // Number, Required
          "url": "", // String
          "src": "" // String
        },
        "transcript_text": "", // String, Raw HTML, Required
        "transcript_file_url": "" // String
      },
      "resources": [ // Array, Optional
        {
          "id": 1, // Number, Required
          "title": "Title", // String, Required
          "description": "<p>This is a description of a resource</p>", // String, Required, Raw HTML
          "src": "http://courses.america.gov/discussion-guide.pdf", // String, Required
          "type": "Discussion Guide" // String
        },
        {
          "id": 1, // Number, Required
          "title": "Title", // String, Required
          "description": "<p>This is a description of a resource</p>", // String, Required, Raw HTML
          "src": "http://courses.america.gov/resource.pdf", // String, Required
          "type": "General Resource", // String
        }
      ],
      "glossary": [ // Array, Optional
        {
          "id": 1, // Number, Required
          "title": "Title", // String, Required
          "description": "<p>This is a description of a glossary term</p>" // String, Raw HTML, Required
        }
      ],
      "tags": [ // Array, Optional
        {
          "id": 1, // Number, Required
          "title": "Title", // String, Required
          "description": "<p>This is a description of a lesson tag</p>" // String, Raw HTML
        }
      ],
      "instructors": [
        {
          "id": 1, // Number, Required
          "title": "Nathan Kleekamp", // String, Required
          "description": "<p>A raw text description of Nathan Kleekamp", // String, Required
          "salutation": "Mr.", // String
          "image": { // Optional
            "id": 1,
            "src": "https://placekitten.com/800/533", // String, Required
            "width": 300, // Number, Required
            "height": 200, // Number, Required
            "title": "The featured image title", // String
            "alt": "The imgage alt text", // String
            "caption": "A caption that might have <em>emphasis</em>", // String, Raw HTML
            "srcset": [ // Array
              {
                "width": 800, // Number, Required
                "height": 533, // Number, Required
                "src": "https://placekitten.com/800/533" // String, Required
              },
              {
                "width": 500, // Number, Required
                "height": 333 ,// Number, Required
                "src": "https://placekitten.com/500/333" // String, Required
              }
            ]
          }
        }
      ],
      "quiz": [ // Array, Required
        {
          "id": 1, // Number, Required
          "questionType": "mc", // String, Required
          "text": "<p>This is lesson 1 question one</p>", // String, Raw HTML, Required
          "correctAnswers": [1], // Array, Required
          "choices": [ // Array, Required
            {
              "text": "This is choice 1"
            },
            {
              "text": "This is choice 2"
            },
            {
              "text": "This is choice 3"
            },
            {
              "text": "This is choice 4"
            },
            {
              "text": "This is choice 5"
            }
          ],
          "feedback": { // Object
            incorrect1: "<p>Not quite!</p>", // String, Raw HTML
            incorrect2: "<p>Almost, but that's not it.</p>", // String, Raw HTML
            correct: "<p>That's it!</p>" // String, Raw HTML
          }
        },
        {
          "id": 1, // Number, Required
          "questionType": "mc", // String, Required
          "text": "<p>This is lesson 1 question one</p>", // String, Raw HTML, Required
          "correctAnswers": [1], // Array, Required
          "choices": [ // Array, Required
            {
              "text": "This is choice 1"
            },
            {
              "text": "This is choice 2"
            },
            {
              "text": "This is choice 3"
            },
            {
              "text": "This is choice 4"
            },
            {
              "text": "This is choice 5"
            }
          ],
          "feedback": { // Object
            incorrect1: "<p>Not quite!</p>", // String, Raw HTML
            incorrect2: "<p>Almost, but that's not it.</p>", // String, Raw HTML
            correct: "<p>That's it!</p>" // String, Raw HTML
          }
        }
      ]
    }
  ]
}

module.exports = course;
