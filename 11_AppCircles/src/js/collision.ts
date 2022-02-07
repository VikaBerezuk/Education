export function isCollided(particle:any, otherParticle:any) {
    console.log(particle, otherParticle)
    const dx = Math.abs(particle.x - otherParticle.x);
    const dy = Math.abs(particle.y - otherParticle.y);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= (particle.radius + otherParticle.radius);
}

export function rotate(velocity:any, angle:number) {
    return {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };
}

export function resolveCollision(particle:any, otherParticle:any) {
    const xVelocityDiff = particle?.velocity.x - otherParticle?.velocity.x;
    const yVelocityDiff = particle?.velocity.y - otherParticle?.velocity.y;

    const xDist = otherParticle?.x - particle?.x;
    const yDist = otherParticle?.y - particle?.y;

    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        const angle = -Math.atan2(
            otherParticle?.y - particle?.y,
            otherParticle?.x - particle?.x
        );

        const m2 = particle.mass;
        const m1 = otherParticle.mass;

        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        const v1 = {
            x: (u1?.x * (m1 - m2)) / (m1 + m2) + (u2?.x * 2 * m2) / (m1 + m2),
            y: u1?.y,
        };
        const v2 = {
            x: (u2?.x * (m2 - m1)) / (m1 + m2) + (u1?.x * 2 * m1) / (m1 + m2),
            y: u2?.y,
        };

        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

       if(particle !== undefined) {
           particle.velocity.x = vFinal1.x;
           particle.velocity.y = vFinal1.y;
           otherParticle.velocity.x = vFinal2.x;
           otherParticle.velocity.y = vFinal2.y;
       }

        return [particle?.velocity, otherParticle?.velocity];
    }
}