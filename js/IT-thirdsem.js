
  //for redrect to the subjects html
document.addEventListener('DOMContentLoaded', () => {
    const subjectLinks = {
      'discrete-mathematics': 'descrete-maths.html',
      'signals-systems': 'signals-systems.html',
      'data-structures-algorithms': 'data-structures-algorithms.html',
      'technical-communication': 'technical-communication.html',
      'digital-logic-design': 'digital-logic-design.html',
      'database-management-systems': 'database-management-systems.html',
      'computer-networks': 'computer-networks.html',
      'web-programming': 'web-programming.html',
      'community-service': 'community-service.html',
      'course-policy-brief': 'course-policy-brief.html'
    };

    document.querySelectorAll('.sub').forEach(sub => {
      sub.addEventListener('click', () => {
        const id = sub.id;
        if (subjectLinks[id]) {
          setTimeout(() => {
            window.location.href = subjectLinks[id];
          }, 1000);
        }
      });
    });
  });

  //for redrect to the subjects html