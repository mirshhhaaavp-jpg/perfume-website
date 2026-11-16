import http.server
import socketserver
import os
import sys

PORT = 5173
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")

class SPAServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        req_path = self.path.split('?')[0].split('#')[0]
        local_path = os.path.join(DIRECTORY, req_path.lstrip('/'))
        if not os.path.exists(local_path) or os.path.isdir(local_path):
            self.path = '/index.html'
        return super().do_GET()

    def do_HEAD(self):
        req_path = self.path.split('?')[0].split('#')[0]
        local_path = os.path.join(DIRECTORY, req_path.lstrip('/'))
        if not os.path.exists(local_path) or os.path.isdir(local_path):
            self.path = '/index.html'
        return super().do_HEAD()

    def log_message(self, format, *args):
        pass

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), SPAServer) as httpd:
        print(f"ÉLORA Luxury Arabian Perfumes running at http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
