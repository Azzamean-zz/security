<?php
function security_shortcode()
{
    return '<div class="section-security group-security">
  <div class="col-security span_1_of_3-security">
      <!-- CARD ONE -->
      <div class="security-card">
          <div class="security-top-line"></div>
          <div class="security-logo-container">
              <img class="security-logo" id="id0-security-logo" src="">
          </div>
          <div class="security-project-name" id="id0-security-project-name"></div>
          <div class="security-status-container">
              <div class="security-status-line"></div>
              <div class="security-status-box">
                  <a id="id0-security-status-link" href="">
                      <img id="id0-security-status" src="">
                  </a>
              </div>
          </div>
          <div class="security-white-section">
              <table class="security-table">
                  <tbody>
                      <tr class="security-head-row">
                          <th>ISSUES</th>
                          <th>HIGH</th>
                          <th>MEDIUM</th>
                          <th>LOW</th>
                          <th>TOTAL</th>
                      </tr>
                      <tr class="security-open-row" data-toggle="tooltip" title="Total vulnerabilities detected since initiation of scanning">
                          <td>OPEN</td>
                          <td class="security-high" id="open-high-0"></td>
                          <td class="security-med" id="open-med-0"></td>
                          <td class="security-low" id="open-low-0"></td>
                          <td class="security-total" id="open-total-0"></td>
                      </tr>
                      <tr class="security-fixable-row" data-toggle="tooltip" title="Total fixable vulnerabilities since initiation of scanning">
                          <td>FIXABLE</td>
                          <td class="security-high" id="fixable-high-0"></td>
                          <td class="security-med" id="fixable-med-0"></td>
                          <td class="security-low" id="fixable-low-0"></td>
                          <td class="security-total" id="fixable-total-0"></td>
                      </tr>
                  </tbody>
              </table>
              <table class="security-fixed-table">
                  <tbody _ngcontent-c4="">
                      <tr class="security-fixed-row" data-toggle="tooltip" title="Total vulnerabilities fixed since initiation of scanning">
                          <td _ngcontent-c4="">FIXED</td>
                          <td class="security-high" id="fixed-high-0"></td>
                          <td class="security-med" id="fixed-med-0"></td>
                          <td class="security-low" id="fixed-low-0"></td>
                          <td class="security-total" id="fixed-total-0"></td>
                      </tr>
                  </tbody>
              </table>
              <div class="security-last-scanned">
                  <div class="security-scanned">last scanned</div>
                  <div class="security-date-container">
                      <span class="security-last-scanned-date" id="last-scanned-date-0"></span>
                      &nbsp;|&nbsp;
                      <span class="security-scan-report-link">VIEW ERROR REPORT</span>
                  </div>
              </div>
              <div class="security-repos-section">
                  <div class="security-total-repos">
                      <span class="security-count" id="total-repos-0"></span>
                      <br>
                      <span class="security-text">total repos</span>
                  </div>
                  <div class="security-scanned-repos">
                      <span class="security-count" id="scanned-repos-0"></span>
                      <br>
                      <span class="security-text">scanned repos</span>
                  </div>
              </div>
          </div>
          <div class="security-footer">
              <button class="security-view-issues-btn" id="id0-viewBtn">
                  <span class="security-view-issues-txt">Request Access</span>
              </button>
          </div>
      </div>
  </div>
  <div class="col-security span_1_of_3-security">
      <!-- CARD TWO -->
      <div class="security-card">
          <div class="security-top-line"></div>
          <div class="security-logo-container">
              <img class="security-logo" id="id1-security-logo" src="">
          </div>
          <div class="security-project-name" id="id1-security-project-name"></div>
          <div class="security-status-container">
              <div class="security-status-line"></div>
              <div class="security-status-box">
                  <a id="id1-security-status-link" href="">
                      <img id="id1-security-status" src="">
                  </a>
              </div>
          </div>
          <div class="security-white-section">
              <table class="security-table">
                  <tbody>
                      <tr class="security-head-row">
                          <th>ISSUES</th>
                          <th>HIGH</th>
                          <th>MEDIUM</th>
                          <th>LOW</th>
                          <th>TOTAL</th>
                      </tr>
                      <tr class="security-open-row" data-toggle="tooltip" title="Total vulnerabilities detected since initiation of scanning">
                          <td>OPEN</td>
                          <td class="security-high" id="open-high-1"></td>
                          <td class="security-med" id="open-med-1"></td>
                          <td class="security-low" id="open-low-1"></td>
                          <td class="security-total" id="open-total-1"></td>
                      </tr>
                      <tr class="security-fixable-row" data-toggle="tooltip" title="Total fixable vulnerabilities since initiation of scanning">
                          <td>FIXABLE</td>
                          <td class="security-high" id="fixable-high-1"></td>
                          <td class="security-med" id="fixable-med-1"></td>
                          <td class="security-low" id="fixable-low-1"></td>
                          <td class="security-total" id="fixable-total-1"></td>
                      </tr>
                  </tbody>
              </table>
              <table class="security-fixed-table  ">
                  <tbody _ngcontent-c4="">
                      <tr class="security-fixed-row" data-toggle="tooltip" title="Total vulnerabilities fixed since initiation of scanning">
                          <td _ngcontent-c4="">FIXED</td>
                          <td class="security-high" id="fixed-high-1"></td>
                          <td class="security-med" id="fixed-med-1"></td>
                          <td class="security-low" id="fixed-low-1"></td>
                          <td class="security-total" id="fixed-total-1"></td>
                      </tr>
                  </tbody>
              </table>
              <div class="security-last-scanned">
                  <div class="security-scanned">last scanned</div>
                  <div class="security-date-container">
                      <span class="security-last-scanned-date" id="last-scanned-date-1"></span>
                      &nbsp;|&nbsp;
                      <span class="security-scan-report-link">VIEW ERROR REPORT</span>
                  </div>
              </div>
              <div class="security-repos-section">
                  <div class="security-total-repos ">
                      <span class="security-count" id="total-repos-1"></span>
                      <br>
                      <span class="security-text">total repos</span>
                  </div>
                  <div class="security-scanned-repos">
                      <span class="security-count" id="scanned-repos-1"></span>
                      <br>
                      <span class="security-text">scanned repos</span>
                  </div>
              </div>
          </div>
          <div class="security-footer">
              <button class="security-view-issues-btn" id="id1-viewBtn">
                  <span class="security-view-issues-txt">Request Access</span>
              </button>
          </div>
      </div>
  </div>
  <div class="col-security span_1_of_3-security">
      <!-- CARD THREE -->
      <div class="security-card">
          <div class="security-top-line"></div>
          <div class="security-logo-container">
              <img class="security-logo" id="id2-security-logo" src="">
          </div>
          <div class="security-project-name" id="id2-security-project-name"></div>
          <div class="security-status-container">
              <div class="security-status-line"></div>
              <div class="security-status-box">
                  <a id="id2-security-status-link" href="">
                      <img id="id2-security-status" src="">
                  </a>
              </div>
          </div>
          <div class="security-white-section">
              <table class="security-table">
                  <tbody>
                      <tr class="security-head-row">
                          <th>ISSUES</th>
                          <th>HIGH</th>
                          <th>MEDIUM</th>
                          <th>LOW</th>
                          <th>TOTAL</th>
                      </tr>
                      <tr class="security-open-row" data-toggle="tooltip" title="Total vulnerabilities detected since initiation of scanning">
                          <td>OPEN</td>
                          <td class="security-high" id="open-high-2"></td>
                          <td class="security-med" id="open-med-2"></td>
                          <td class="security-low" id="open-low-2"></td>
                          <td class="security-total" id="open-total-2"></td>
                      </tr>
                      <tr class="security-fixable-row" data-toggle="tooltip" title="Total fixable vulnerabilities since initiation of scanning">
                          <td>FIXABLE</td>
                          <td class="security-high" id="fixable-high-2"></td>
                          <td class="security-med" id="fixable-med-2"></td>
                          <td class="security-low" id="fixable-low-2"></td>
                          <td class="security-total" id="fixable-total-2"></td>
                      </tr>
                  </tbody>
              </table>
              <table class="security-fixed-table  ">
                  <tbody _ngcontent-c4="">
                      <tr class="security-fixed-row" data-toggle="tooltip" title="Total vulnerabilities fixed since initiation of scanning">
                          <td _ngcontent-c4="">FIXED</td>
                          <td class="security-high" id="fixed-high-2"></td>
                          <td class="security-med" id="fixed-med-2"></td>
                          <td class="security-low" id="fixed-low-2"></td>
                          <td class="security-total" id="fixed-total-2"></td>
                      </tr>
                  </tbody>
              </table>
              <div class="security-last-scanned">
                  <div class="security-scanned">last scanned</div>
                  <div class="security-date-container">
                      <span class="security-last-scanned-date" id="last-scanned-date-2"></span>
                      &nbsp;|&nbsp;
                      <span class="security-scan-report-link">VIEW ERROR REPORT</span>
                  </div>
              </div>
              <div class="security-repos-section">
                  <div class="security-total-repos">
                      <span class="security-count" id="total-repos-2"></span>
                      <br>
                      <span class="security-text">total repos</span>
                  </div>
                  <div class="security-scanned-repos">
                      <span class="security-count" id="scanned-repos-2"></span>
                      <br>
                      <span class="security-text">scanned repos</span>
                  </div>
              </div>
          </div>
          <div class="security-footer">
              <button class="security-view-issues-btn" id="id2-viewBtn">
                  <span class="security-view-issues-txt">Request Access</span>
              </button>
          </div>
      </div>
  </div>
</div>
';
}
add_shortcode('security', 'security_shortcode');
