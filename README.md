nTrace
======

About
-------

nTrace is a command-line security tool to detect Cross-Site Tracing (XST) vulnerabilities, written in node. An XST attack is typically used in conjunction with an XSS attack, making it additionally devestating.

Install
-------

git clone git://github.com/gabemarshall/ntrace.git

```
npm install -g ntrace
```

Use
-------
```
./ntrace.js --url=<www.url.com> --https=<yes or no>

./ntrace.js --url=www.google.com https=yes
```
