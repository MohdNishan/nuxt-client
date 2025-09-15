export default `
  <style>
    .help-container {
      font-family: 'Segoe UI', sans-serif;
      color: #333;
      line-height: 1.6;
      padding: 10px;
    }
    .help-title {
      font-size: 24px;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 10px;
      text-align: center;
    }
    .help-section {
      margin-bottom: 18px;
      padding: 10px;
      border-left: 4px solid #663e05;
      background: #f8f9fa;
      border-radius: 6px;
    }
    .help-section h5 {
      font-size: 18px;
      margin-bottom: 6px;
      color: #2980b9;
    }
    .help-section p, .help-section ul {
      margin: 5px 0;
      padding-left: 15px;
    }
    .help-section ul li {
      list-style: none;
      margin: 5px 0;
      position: relative;
      padding-left: 20px;
    }
    .help-section ul li::before {
      content: "✔";
      color: #27ae60;
      position: absolute;
      left: 0;
    }
    .highlight {
      font-weight: bold;
      color: #e74c3c;
    }
  </style>

  <div class="help-container">
    <div class="help-title">🚀 How to Execute a Process</div>
    <p>This guide helps you run a process using the OGC API service efficiently.</p>

    <div class="help-section">
      <h5>1. Browsing Processes</h5>
      <p>Navigate through the main page and select a process from the process lists to open its form.</p>
    </div>

    <div class="help-section">
      <h5>2. Filling Inputs</h5>
      <ul>
        <li>Provide values for each input parameter.</li>
        <li>Complex inputs support <span class="highlight">URL (href)</span> or inline data.</li>
        <li>Bounding boxes require coordinates and EPSG codes.</li>
      </ul>
    </div>

    <div class="help-section">
      <h5>3. Preview vs Submit</h5>
      <ul>
        <li><span class="highlight">Show JSON Preview:</span> Review the request before execution.</li>
        <li><span class="highlight">Submit:</span> Send the request to start the process.</li>
      </ul>
    </div>

    <div class="help-section">
      <h5>4. Outputs</h5>
      <p>Choose the output format and transmission type (value or reference).</p>
    </div>

    <div class="help-section">
      <h5>5. Notifications</h5>
      <p>Provide callback URLs to receive job status updates in real time.</p>
    </div>
  </div>
`