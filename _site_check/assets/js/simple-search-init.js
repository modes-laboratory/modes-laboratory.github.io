/* Initialize Simple-Jekyll-Search (client-side search) */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof SimpleJekyllSearch === 'undefined') return;
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '/search.json',
    searchResultTemplate: '<a href="{{url}}">{{title}}</a>',
    noResultsText: 'No results',
    limit: 10,
  });
});
