# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture
Portfolio page with overview of my public GitHub projects and general information about me and my contact details

## 2. Semantic decisions I made 

### Decision 1 – iframe for YouTube video
- Element(s) used: iframe with some compulsary styling
- Where in the page: Projects section
- Why this element is semantically correct: Correct and only way to embed a YouTube video

I used it the way I did because it is the only way YouTube's API accepts video embedings 

### Decision 2 – <h3> for interests sub-sections
- Element(s) used: h3
- Where in the page: interests section
- Why this element is semantically correct: it logically groups the interests together by area of interest

### Decision 3 – section instead of article for sections of main
- Element(s) used: section
- Where in the page: inside main
- Why this element is semantically correct: it groups the content together by it's logical meaning inside of the main area. The name section, kind of speaks for itself. It is not an independent article but a vital section of the page

---

## 3. Accessibility considerations
- What accessibility features did you include?
Navigation by section ids; alt texts for pictures; usage of \<header>, \<main> and \<footer>

- How do they improve usability?
The named sections provide an easy way to identify the upcoming sections content. Alt texts provide an alternative description for people who need to use screenreaders and cannot view pictures.
These semantic html elements provide a clear orientation about the sites general structure


---

## 4. What I learned
I've refresehed my knowledge about the different html elements and especially who to use them accessibility friendly.
I learned about the <figcaption> Element

## 5. What I still need to improve
I need to dig deeper into accessibility requirements of webpages

## 6. Notes about AI usage
- Tool used: Perplexity in Comet
- What I accepted as-is: Nothing
- What I modified manually: I only asked about the usage of the figcaption element, because it was new to me