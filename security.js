jQuery(document).ready(function ($) {

  // GET ALL PROJECTS
  async function getProjects() {
    let urlData;
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      urlData = 'data/data.txt';
    }
    else {
      urlData = 'https://api.security.lfx.linuxfoundation.org/vdproject?beginwith=&filter=&pageno=1&limit=3&sort_order=desc&sort_by=total_fixed_issues';
    }
    let url = await fetch(urlData);
    let data = await url.json();
    return data
  }

  //GET INDIVIDUAL PROJECT DATA
  async function getProjectData(projectId) {
    let urlData;
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      urlData = 'data/' + projectId;
    }
    else {
      urlData = 'https://api.security.lfx.linuxfoundation.org/vulnerability/summary?project_ids=' + projectId;
    }
    let url = await fetch(urlData);
    let data = await url.json();
    return data
  }

  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(0).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0).replace(/\.0$/, '') + 'K';
    }
    return num;
  }

  let viewBtn0 = document.getElementById("id0-viewBtn");
  let viewBtn1 = document.getElementById("id1-viewBtn");
  let viewBtn2 = document.getElementById("id2-viewBtn");

  if (viewBtn0 != null) {
    viewBtn0.addEventListener("click", viewIssues, false);
  }
  if (viewBtn1 != null) {
    viewBtn1.addEventListener("click", viewIssues, false);
  }
  if (viewBtn2 != null) {
    viewBtn2.addEventListener("click", viewIssues, false);
  }

  function viewIssues() {
    window.location = "https://jira.linuxfoundation.org/plugins/servlet/theme/portal/4/create/230";
  }

  function dateFormatter(timestamp) {
    const date = new Date(timestamp * 1000);
    const month = date.toLocaleString('default', {
      month: 'long'
    });
    let options = {
      year: 'numeric',
      timeZoneName: 'short',
      hour: 'numeric',
      minute: 'numeric'
    };
    return month + ', ' + date.getDate() + ' ' + date.toLocaleDateString('en-GB', options);
  }


  // LETS GET THE DATA
  getProjects().then(data => {
    if (data && data.projects)
      data.projects.forEach((project, index) => {

        // FIRST
        if (data.projects[0] && index == 0) {
          let nameExists = document.getElementById("id0-security-project-name");
          if (nameExists) {
            if (data.projects[0].logoUrl === "") {
              document.getElementById("id0-security-logo").src = "https://lfx.linuxfoundation.org/wp-content/uploads/2020/11/no_logo_uploaded.svg";
            } else {
              document.getElementById("id0-security-logo").src = data.projects[0].logoUrl;
            }
            document.getElementById("id0-security-project-name").innerHTML = data.projects[0].name;
            if (data.projects[0].projectCllProjectId != 0) {
              document.getElementById("id0-security-status-link").href = "https://bestpractices.coreinfrastructure.org/projects/" + data.projects[0].projectCllProjectId;
              document.getElementById("id0-security-status").src = "https://bestpractices.coreinfrastructure.org/projects/" + data.projects[0].projectCllProjectId + "/badge";
            }
            getProjectData(data.projects[0].projectId).then(project => {
              document.getElementById("open-high-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.high.total);
              document.getElementById("fixable-high-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.high.fixable);
              document.getElementById("fixed-high-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.high.fixed);
              document.getElementById("open-med-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.medium.total);
              document.getElementById("fixable-med-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.medium.fixable);
              document.getElementById("fixed-med-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.medium.fixed);
              document.getElementById("open-low-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.low.total);
              document.getElementById("fixable-low-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.low.fixable);
              document.getElementById("fixed-low-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.low.fixed);
              document.getElementById("open-total-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.total.total);
              document.getElementById("fixable-total-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.total.fixable);
              document.getElementById("fixed-total-0").innerHTML = nFormatter(project[data.projects[0].projectId].security_issues.total.fixed);
              document.getElementById("last-scanned-date-0").innerHTML = dateFormatter(project[data.projects[0].projectId].updated_at);
              document.getElementById("total-repos-0").innerHTML = project[data.projects[0].projectId].total_repositories;
              document.getElementById("scanned-repos-0").innerHTML = project[data.projects[0].projectId].total_scanned_repositories;
            });
          }
        }

        // SECOND
        if (data.projects[1] && index == 1) {
          let nameExists = document.getElementById("id1-security-project-name");
          if (nameExists) {
            if (data.projects[1].logoUrl === "") {
              document.getElementById("id1-security-logo").src = "https://lfx.linuxfoundation.org/wp-content/uploads/2020/11/no_logo_uploaded.svg";
            } else {
              document.getElementById("id1-security-logo").src = data.projects[1].logoUrl;
            }
            document.getElementById("id1-security-project-name").innerHTML = data.projects[1].name;
            if (data.projects[1].projectCllProjectId != 0) {
              document.getElementById("id1-security-status-link").href = "https://bestpractices.coreinfrastructure.org/projects/" + data.projects[1].projectCllProjectId;
              document.getElementById("id1-security-status").src = "https://bestpractices.coreinfrastructure.org/projects/" + data.projects[1].projectCllProjectId + "/badge";
            }
            getProjectData(data.projects[1].projectId).then(project => {
              document.getElementById("open-high-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.high.total);
              document.getElementById("fixable-high-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.high.fixable);
              document.getElementById("fixed-high-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.high.fixed);
              document.getElementById("open-med-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.medium.total);
              document.getElementById("fixable-med-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.medium.fixable);
              document.getElementById("fixed-med-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.medium.fixed);
              document.getElementById("open-low-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.low.total);
              document.getElementById("fixable-low-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.low.fixable);
              document.getElementById("fixed-low-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.low.fixed);
              document.getElementById("open-total-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.total.total);
              document.getElementById("fixable-total-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.total.fixable);
              document.getElementById("fixed-total-1").innerHTML = nFormatter(project[data.projects[1].projectId].security_issues.total.fixed);
              document.getElementById("last-scanned-date-1").innerHTML = dateFormatter(project[data.projects[1].projectId].updated_at);
              document.getElementById("total-repos-1").innerHTML = project[data.projects[1].projectId].total_repositories;
              document.getElementById("scanned-repos-1").innerHTML = project[data.projects[1].projectId].total_scanned_repositories;
            });
          }
        }

        //THIRD
        if (data.projects[2] && index == 2) {
          let nameExists = document.getElementById("id2-security-project-name");
          if (nameExists) {
            if (data.projects[2].logoUrl === "") {
              document.getElementById("id2-security-logo").src = "https://lfx.linuxfoundation.org/wp-content/uploads/2020/11/no_logo_uploaded.svg";
            } else {
              document.getElementById("id2-security-logo").src = data.projects[2].logoUrl;
            }
            document.getElementById("id2-security-project-name").innerHTML = data.projects[2].name;
            if (data.projects[2].projectCllProjectId != 0) {
              document.getElementById("id2-security-status-link").href = "https://bestpractices.coreinfrastructure.org/projects/" + data.projects[2].projectCllProjectId;
              document.getElementById("id2-security-status").src = "https://bestpractices.coreinfrastructure.org/projects/" + data.projects[2].projectCllProjectId + "/badge";
            }
            getProjectData(data.projects[2].projectId).then(project => {
              document.getElementById("open-high-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.high.total);
              document.getElementById("fixable-high-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.high.fixable);
              document.getElementById("fixed-high-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.high.fixed);
              document.getElementById("open-med-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.medium.total);
              document.getElementById("fixable-med-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.medium.fixable);
              document.getElementById("fixed-med-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.medium.fixed);
              document.getElementById("open-low-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.low.total);
              document.getElementById("fixable-low-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.low.fixable);
              document.getElementById("fixed-low-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.low.fixed);
              document.getElementById("open-total-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.total.total);
              document.getElementById("fixable-total-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.total.fixable);
              document.getElementById("fixed-total-2").innerHTML = nFormatter(project[data.projects[2].projectId].security_issues.total.fixed);
              document.getElementById("last-scanned-date-2").innerHTML = dateFormatter(project[data.projects[2].projectId].updated_at);
              document.getElementById("total-repos-2").innerHTML = project[data.projects[2].projectId].total_repositories;
              document.getElementById("scanned-repos-2").innerHTML = project[data.projects[2].projectId].total_scanned_repositories;
            });
          }
        }
      });
  });
});
