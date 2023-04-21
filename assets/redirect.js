//auto redirect from current *.gitlab.io to custom domain
//send destination domain as domainTo (FQDN)
function _notGitLab(domainTo=true){
  var x = location.hostname.search("gitlab.io")!= -1 ? true : false; // true if *.gitlab.io
  if(x) location.href = domainTo; 
}
