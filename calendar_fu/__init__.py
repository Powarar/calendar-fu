import pathlib

try:
    from .version import __version__, version_info
except ImportError:
    version_info = (1, 0, 0)
    __version__ = "{}.{}.{}".format(*version_info)

authors = (("Vladimir Kirilkin", "kirilkin12@gmail.com"), ("Pavel Safonov", "pshsafonov@gmail.com"))

authors_email = ", ".join("{}".format(email) for _, email in authors)

__license__ = ("Proprietary License",)
__author__ = ", ".join("{} <{}>".format(name, email) for name, email in authors)

package_info = "iCalendar service for FU RUZ API"

__maintainer__ = __author__

PROJECT_ROOT = pathlib.Path(__file__).parent

__all__ = (
    "__author__",
    "__author__",
    "__license__",
    "__maintainer__",
    "__version__",
    "version_info",
    "PROJECT_ROOT",
)
