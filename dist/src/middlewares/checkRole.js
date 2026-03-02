"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkRole;
function checkRole(roles) {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !roles.includes(user.role)) {
            return res.status(403).json({ message: "Acesso negado." });
        }
    };
}
