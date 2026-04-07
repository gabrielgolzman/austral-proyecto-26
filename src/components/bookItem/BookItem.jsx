import { Badge, Card } from "react-bootstrap";
import classNames from "classnames";
import { decidePlural } from "./BookItem.helpers";
import styles from "./BookItem.module.css";

const BookItem = ({
    title,
    author,
    pageCount,
    rating,
    imageUrl,
    available
}) => {
    return <Card className={classNames(
        "mx-3 mb-4",
        styles.card,
    )}>
        <div className={styles.imageWrapper}>
            <Card.Img
                className={styles.image}
                src={
                    imageUrl
                        ? imageUrl
                        : "https://images.pexels.com/photos/35098074/pexels-photo-35098074.jpeg"
                }
                alt={title}
            />
        </div>
        <Card.Body>
            {available ? (
                <Badge bg="success" className={styles.badge}>
                    Disponible
                </Badge>
            ) : (
                <Badge bg="danger" className={styles.badge}>
                    No disponible
                </Badge>
            )}
            <Card.Title className={styles.title}>{title}</Card.Title>
            <Card.Subtitle className={styles.author}>{author}</Card.Subtitle>
            <div>
                {rating} estrella{decidePlural(rating)}
            </div>
            <p className={styles.pageCount}>
                {pageCount} página{decidePlural(pageCount)}
            </p>
        </Card.Body>
    </Card>
}

export default BookItem;