    window.addEventListener('scroll', function() {
        const timeInfos = document.querySelectorAll('#section-chave li .time-info');
        for (const timeInfo of timeInfos) {
          if (isElementInViewport(timeInfo)) {
            timeInfo.style.opacity = 1;
            timeInfo.style.bottom = '5%';
          } else {
            timeInfo.style.opacity = 0;
            timeInfo.style.bottom = '-20px';
          }
        }
      });
      
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

  