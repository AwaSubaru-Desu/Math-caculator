function setup() {
      // Setup canvas if needed
    }

    function draw() {
      // Draw if needed
    }

    function solveMathProblem() {
      let mathInput = document.getElementById('mathInput').value;
      let solutionElement = document.getElementById('solution');
      
      try {
        // Use Math.js to evaluate the expression
        let solution = math.evaluate(mathInput);
        solutionElement.innerText = "Solution: " + solution;
      } catch (error) {
        solutionElement.innerText = "Error: " + error.message;
      }
    }